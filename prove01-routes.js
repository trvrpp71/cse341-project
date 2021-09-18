let uName = ["me","you"];

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello from my first Node.js server</h1></body>");
    res.write("<label for='create-user'>Enter username</label>");
    res.write('<form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Submit</button></form>');
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My Second page</title></head>");
    res.write("<body>");
    res.write("<h1>List of Users:</h1>");
    // res.write("<ul id='list'><li>Me</li><li>You</li>");
    uName.forEach(function(item){
      res.write("<li>" + item + "</li>")
    });
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
      const body = [];
      req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username); //username is whatever was entered
      uName.push(username);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
  }
}

exports.handler = requestHandler;

