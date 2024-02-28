const Hello = ({name, message}) => {
    console.log(name, message)
  return (
    <div>
      <h1>Hello {name} {message}</h1>
    </div>
  )
}

export default Hello

import PropTypes from "prop-types"
Hello.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string
    }
Hello.defaultProps = {
    name: "User",
    message: "How are you?"
    }
    