export default defineEventHandler(async (event) => {
  const count = await prisma.todo.count();
  return {
    message: `Found ${count} todos.`,
  };
});
