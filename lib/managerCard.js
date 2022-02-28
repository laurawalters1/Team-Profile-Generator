writeManagerCard = () => {
  return `<div class="card text-black bg-white  mb-3" style="max-width: 18rem;">
<div class="card-header bg-primary text-white"><h2>${this.name}</h2>
<h3>${this.role}</h3></div>
<div class="card-body">
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${this.id}</li>
    <li class="list-group-item">Email: ${this.email}</li>
    <li class="list-group-item">Office Number: ${this.officeNumber}</li>
  </ul>
</div>
</div>`;
};
module.exports = writeManagerCard();
