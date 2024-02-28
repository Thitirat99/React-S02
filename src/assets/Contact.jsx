import PropTypes from 'prop-types';

export default function Contact(props) {
  return (
    <div>
      <h1>{props.email} {props.phone}</h1>
     <h2>Send me a message</h2>
    </div>
    );
}

Contact.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string
    }
    