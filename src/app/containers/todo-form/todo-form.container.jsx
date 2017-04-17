import { connect } from 'react-redux';
import {addTodo} from '../../redux/action-creators/todo-list.action-creators';
import TextInputForm from '../../components/text-input-form/text-input-form.component';

const TodoForm = connect(
    null,
    (dispatch) => {
        return {
            onSubmit: (text) => {
                dispatch(addTodo(text));
            }
        }
    }
)(TextInputForm);

export default TodoForm;

