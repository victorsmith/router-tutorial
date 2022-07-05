import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
    let navigate = useNavigate()
    let location = useLocation()

	let params = useParams();
	let invoice = getInvoice(parseInt(params.invoiceID, 10));
	return (
		<main>
			<h2>Total Due: {invoice.amount}</h2>
			<p>
				{invoice.name}: {invoice.number}
			</p>
			<p>Due Date: {invoice.due}</p>
      <button
        onClick={ () => {
          deleteInvoice(invoice.number)
          navigate("/invoices" + location.search)
        }}
      >
        Delete
      </button>
		</main>
	);
}
