'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  // delete chached data and fetch new one, so it will
  // show the new data rendered on the server without
  // doing it on the client side
  revalidatePath('/todos');
};

export const newTodo = async (formData: any) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });

  // delete chached data and fetch new one, so it will
  // show the new data rendered on the server without
  // doing it on the client side
  revalidatePath('/todos');
};
