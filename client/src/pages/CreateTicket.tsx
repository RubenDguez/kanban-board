import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { retrieveUsers } from '../api/userAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData | undefined>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: null,
  });

  const navigate = useNavigate();

  const [users, setUsers] = useState<UserData[] | undefined>([]);

  const getAllUsers = async () => {
    try {
      const data = await retrieveUsers();
      setUsers(data);
    } catch (err) {
      console.error('Failed to retrieve user info', err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newTicket) {
      const data = await createTicket(newTicket);
      console.log(data);
      navigate('/');
    }
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleUserChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Create Ticket</h1>
          <div className="form-field">
            <label htmlFor="tName">Ticket Name</label>
            <textarea id="tName" rows={1} name="name" value={newTicket?.name || ''} onChange={handleTextAreaChange} />
          </div>
          <div className="form-field">
            <label htmlFor="tStatus">Ticket Status</label>
            <select name="status" id="tStatus" value={newTicket?.status || ''} onChange={handleTextChange}>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="tDescription">Ticket Description</label>
            <textarea id="tDescription" rows={1} name="description" value={newTicket?.description || ''} onChange={handleTextAreaChange} />
          </div>
          <div className="form-field">
            <label htmlFor="tUserId">User's ID</label>
            <select name="assignedUserId" value={newTicket?.assignedUserId || ''} onChange={handleUserChange}>
              {users ? (
                users.map((user) => {
                  return (
                    <option key={user.id} value={String(user.id)}>
                      {user.username}
                    </option>
                  );
                })
              ) : (
                <textarea id="tUserId" name="assignedUserId" value={newTicket?.assignedUserId || 0} onChange={handleTextAreaChange} />
              )}
            </select>
          </div>
          <div className="form-action">
            <button type="submit" onSubmit={handleSubmit}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTicket;
