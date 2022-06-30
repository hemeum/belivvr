type Props = {
  socket: any
};

export default function MessageForm({ socket }: Props) {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    (Array.from(formData.values()) as string[]).forEach((message) => {
      socket.emit('chat', message);
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="text" />
      <button type="submit"> Submit</button>
    </form>
  );
}
