
  var app = new function() {
    // this.Edit = function (item) {
    //   var el = document.getElementById('edit-name');
    //   el.value = this.articulos[item];

  
    //   document.getElementById('saveEdit').onsubmit = function() {
    //     var description = el.value;
  
    //     if (description) {
    //       self.articulos.splice(item, 1, description.trim());
    //       self.FetchAll();
    //     }
    //   }
    // };
  
    // this.Delete = function (item) {
    //   this.articulos.splice(item, 1);
    //   this.FetchAll();
    // };
    
  }
  
  let tableArticulos = document.getElementById('tableArticulos');

  let articulos = [
    {
        description: 'Shampoo',
        precio: 20.5,
        stock: 100
    },
    {
        description: 'Jabon',
        precio: 10,
        stock: 70
    },
    {
        description: 'Toalla',
        precio: 100,
        stock: 150
    }
  ]

  document.getElementById('btnAceptar').onclick = function () {
      if(document.getElementById('btnAceptar').value == 'editar'){
        Edit();  
      } else {
        Add();
      }
  }

  const Add = () => {
    document.getElementById('btnAceptar').value = 'editar'
    let description = document.getElementById('description').value;
    let precio = document.getElementById('precio');
    let stock = document.getElementById('stock');
  
    if (description && precio && stock) {
        var item = { 
            "description": description.trim(), 
            "precio": precio, 
            "stock": stock
        }
        description.value = ''
        precio.value = ''
        stock.value = ''

        articulos = [...articulos, { 
            "description": description, 
            "precio": "precio", 
            "stock": "stock" 
        }]

        FetchAll();
    } else {
        alert("Rellena todos los campos")
    }
  }

  const Edit = (index) => {
    document.getElementById('btnAceptar').value = 'editar'
    var myModal = document.getElementById('modalArticulo')
    var description = document.getElementById('description')
    var precio = document.getElementById('precio')
    var stock = document.getElementById('stock')
    
    myModal.addEventListener('shown.bs.modal', function () {
        description.focus()
        description.value = articulos[index].description
        precio.value = articulos[index].precio
        stock.value = articulos[index].stock
    })
  }

  const FetchAll = () => {
    var data = '';

    if (Object.keys(articulos).length > 0) {
      articulos.map((articulo, index) => {
        data += '<tr>';
        data += '<td>' + (index+1) + '</td>';
        data += '<td>' + articulo.description + '</td>';
        data += '<td>' + articulo.precio + '</td>';
        data += '<td>' + articulo.stock + '</td>';
        data += '<td class="text-center"><button class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#modalArticulo" onclick="Edit(' + index + ')">Editar</button><button class="btn btn-danger mx-1" onclick="Delete(' + index + ')">Eliminar</button></td>';
        data += '</tr>';
      })
    }
    return tableArticulos.innerHTML = data;
  }

  FetchAll();

