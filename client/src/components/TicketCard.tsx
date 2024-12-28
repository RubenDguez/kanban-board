import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

interface TicketCardProps {
  ticket: TicketData;
  deleteTicket: (ticketId: number) => Promise<ApiMessage>;
}

const TicketCard = ({ ticket, deleteTicket }: TicketCardProps) => {
  const navigate = useNavigate();

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const ticketId = Number(event.currentTarget.value);
    if (!isNaN(ticketId)) {
      try {
        const data = await deleteTicket(ticketId);
        return data;
      } catch (error) {
        console.error('Failed to delete ticket:', error);
      }
    }
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <p>
        <small>Assigned to: </small>
        <small>
          <em>{ticket.assignedUser?.username}</em>
        </small>
      </p>
      <div className="button-wrapper">
        <button onClick={() => navigate(`/edit/${ticket.id}`)} className="editBtn">Edit</button>
        <button value={String(ticket.id)} onClick={handleDelete} className="deleteBtn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
