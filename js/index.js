//target form
const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", async (e) => {
  //prevent/stop default form behaiour
  e.preventDefault();
  const response = await fetch(
    `https://api.github.com/users/${e.target.username.value}/repos`
  );
  console.log(response);
  const result = await response.json();
  console.log(result);
  result.forEach((repo) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const time = document.createElement("p");
    const a = document.createElement("a");
    a.href = repo.html_url;

    h3.innerText = repo.name;
    p.innerText = repo.description
      ? repo.description
      : "no descriotion available.";
    div.append(h3, p);
    const date = new Date(repo.pushed_at);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    console.log(moment(year + month + day, "YYYYMMDD").fromNow());
    time.innerText = moment(year + month + day, "YYYYMMDD").fromNow();
    a.append(div, time);
    li.append(a);
    {
      /* <li>
      <a href="">
        <div>
          <h3></h3>
          <p></p>{" "}
        </div>{" "}
        <p></p>{" "}
      </a>
    </li>; */
    }
    ul.append(li);
  });
});
