import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('');

  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  // };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // console.log(ref.current!.value); // уверены что здесь будет все ок
      props.onAdd(ref.current!.value)
      ref.current!.value = '';
      // console.log(title);
      // setTitle('');
    }
  };

  return (
    <div className='input-field mt2'>
      <input ref={ref} onKeyPress={keyPressHandler} type='text' id='title' placeholder='Enter name todo' />
      <label htmlFor='title' className='active'>
        Enter name todo
      </label>
    </div>
  );
};

export default TodoForm;
