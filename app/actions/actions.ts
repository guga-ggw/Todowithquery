export const CreateTodo = async (title : string) => {
    console.log(title)
    'you are here'
    await fetch('api/createTodo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title
      })
    }).then((res) => {
      if (res.ok) {
        return 'worked'
      }
    });
  };