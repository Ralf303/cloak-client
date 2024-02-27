async function checkAuth() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = " http://localhost/authorization";
    return;
  }

  try {
    const response = await axios.post(
      ` http://localhost/auth/check`,
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
      window.location.href = " http://localhost/authorization";
    }
  } catch (error) {
    if (error.name === "AxiosError") {
      localStorage.clear();
      window.location.href = " http://localhost/authorization";
    }

    console.log(error);
  }
}

checkAuth();
