const newUser = {
  email: "test@test.com",
  firstName: "Bob",
  lastName: "Smith",
  backgroundInfo:
    "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
  address: {
    street: "125 Place St.",
    suite: "Apt 1404",
    city: "Wankerton",
    state: "WI",
    zipCode: "55555",
  },
};

const mockRequest = (session, body, query, params) => ({
  session,
  body,
  query,
  params,
});

const mockResponse = () => {
  const res = {};
  res.clearCookie = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

export { mockRequest, mockResponse, newUser };
