async function checkAuth() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = " https://cloakgram.com/authorization";
    return;
  }

  try {
    const response = await axios.post(
      ` https://cloakgram.com/auth/check`,
      {},
      {
        headers: {
          token: `Bearer ${token}`,
        },
      }
    );

    const { status } = response.data;

    if (status) {
      localStorage.setItem("ourNick", status.username);
      return;
    } else {
      localStorage.clear();
      window.location.href = " https://cloakgram.com/authorization";
    }
  } catch (error) {
    if (error.name === "AxiosError") {
      localStorage.clear();
      window.location.href = " https://cloakgram.com/authorization";
    }

    console.log(error);
  }
}

checkAuth();
