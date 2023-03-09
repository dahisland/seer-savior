export const userInitState = {
  profile: {
    _id: "",
    email: "",
    password: "",
    surname: "",
    picture: "",
    level: null,
    scores: [{ level: null, maxScore: null }],
  },
  token: null,
  status: "",
  message: "",
  isConnected: false,
};
