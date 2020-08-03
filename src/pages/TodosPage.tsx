import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (quesiion: string) => boolean

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };

    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev])
  };

  const toggleHandler = (id: number): void => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  };

  const removeHandler = (id: number): void => {
    const shoudRemove = confirm('Вы уверены, что хотите удалить элемент?');

    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }

  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  );
};

export default TodosPage;
