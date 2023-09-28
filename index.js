async function getUsers() {
  try {
    // fetch data from db
    // change fetch link according to your port number from node server
    const data = await fetch("http://localhost:3001/fetch-data").then((res) => {
      return res.json();
    });
    // run function
    showData(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function showData(data) {
  let posts = "";
  //  content will run in loop according to our data in db
  for (let i = 0; i <= data.length - 1; i++) {
    let post = `
    <div style="display: block" class="body__section">
    <div class="body_top body_top--writing">
    <h1><input class="body__checkbox" type="checkbox" />CREWMATEJ</h1>
    <a style="text-transform: lowercase" href="#">${data[i].title}</a>
    <p>${data[i].timestamp}</p>
    <p>No. ${i + 1}</p>
  </div>
  <div id='post-content'>${data[i].content}</div>
  </div>
  <hr />
  `;
    // final div will then show to html
    posts += post;
  }
  document.getElementById("posts").innerHTML = posts;
}
