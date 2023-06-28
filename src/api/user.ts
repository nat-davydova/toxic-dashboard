export interface User {
  id: string;
  name: string;
  lastName: string;
}

function userDataMapper(users: User[]): User | null {
  const isUserExists = Boolean(users.length);

  if (!isUserExists) {
    throw new Error("There is no User");
  }

  const { id, lastName, name } = users[0];

  if (!id) {
    throw new Error("User has no id");
  }

  return {
    id,
    name: name ?? "",
    lastName: lastName ?? "",
  };
}

export const getUser = async () => {
  const usersData = await fetch(
    "https://649c561b048075719237fb4b.mockapi.io/user"
  );
  const users = await usersData.json();
  const user = userDataMapper(users);

  return user;
};
