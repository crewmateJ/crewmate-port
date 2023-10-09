const serverUrl = (process) ? process.env.SERVER_URL : NEXT_PUBLIC_SERVER_URL;

async function getUsers() {
  try {
    const data = await fetch(`${serverUrl}/fetch-data`).then(res => res.json());
    
    showData(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function showData(data) {
  let posts = "";

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

    posts += post;
  }

  document.getElementById("posts").innerHTML = posts;
}

(async () => {
  console.log(await getUsers());
})();