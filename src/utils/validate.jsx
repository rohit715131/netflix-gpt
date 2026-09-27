export const checkValidData = (name, email, password) => {
  //
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/.test(name);

  if (!nameRegex) return "Name is not valid";
  if (!emailRegex) return "Email Id is not valid";
  if (!passwordRegex) return "Password is not valid";

  return null;
};
