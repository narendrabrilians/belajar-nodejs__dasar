import https from "https";

const endpoint = "your-endpoint";

const request = https.request(
  endpoint,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info("data : " + data.toString());
    });
  }
);

const body = JSON.stringify({
  firstName: "Narendra",
  lastName: "F.R",
});

request.write(body);
request.end;
