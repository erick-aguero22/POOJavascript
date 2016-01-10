//Agregar funcion javaScritp para saber si existe un caracter de un texto dentro de un array
Array.prototype.containsSubString = function (text) {
    for (var i in this) {
        if (this[i].toString().indexOf(text) != -1)
            return i;
    }
    return -1;
}

//objeto usuario que creara una estructura POO para crear una tabla con los datos de un JSON
var usuario = function (arrayColumna, editable, selector) {
    var self = this;
    self.html = selector === undefined ? "#contenido" : "#" + selector;
    self.main = "<input type='text' id='txtobject-Table' placeholder='ingrese su busqueda ...' class='txtSearchOff'  /><table border='0' id='example-erick' class='object-Table'><thead><tr></tr></thead><tbody></tbody></table>";
    $(self.html).html(self.main);
    self.inputfilter = $("#txtobject-Table");
    self.tableMain = $("#example-erick");
    self.editable = editable;
    if (arrayColumna !== null) {
        editable === true ? arrayColumna.push("Editable") : arrayColumna;
        self.arrayColumna = arrayColumna;
    }
    else {
        self.arrayColumna = ["columna 1", "Columna 2", "Columna 3"];
        $(".object-Table thead tr").hide();
    }
    self._setData = function (data) {
        try {
            this._json = JSON.parse(data);
        } catch (e) {
            this._json = data;
        }
        self._getData(self.arrayColumna, self.editable);
    }
    self._getData = function (arrayColumna, editable) {
        var tempHTML = "";
        $(".object-Table thead tr").html("");
        for (var i = 0; i < arrayColumna.length; i++) {
            tempHTML += "<th>" + arrayColumna[i] + "</th>";
        }
        $(".object-Table tbody").html("<tr class='tempLoagind'><td  colspan='4' >Cargando</td></tr>");
        $(".object-Table thead tr").append(tempHTML);
        if (this._json.length > 0) {
            for (var j = 0; j < this._json.length; j++) {
                var wester = JSON.stringify(this._json[j]).split(",");
                var naruto = "";
                for (var g = 0; g < wester.length; g++) {
                    if (editable === true) {
                        var dataJSON = wester[g].split(":")[1].replace('"', '').replace('"', '').replace('}', '');
                        if (g === (arrayColumna.length - 2)) {
                            naruto += "<td>" + dataJSON + "</td><td style='text-align:center;'><a class='edit-object-Table'>edit</a>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;<a class='delete-object-Table'>delete</a></td>";
                        } else {
                            naruto += "<td>" + dataJSON + "</td>";
                        }
                    } else {
                        naruto += "<td>" + dataJSON + "</td>";
                    }
                }
                $(".tempLoagind").remove();
                $(".object-Table tbody").append("<tr id=" + wester[0].split(":")[1].replace('"', '').replace('"', '').replace('}', '') + ">" + naruto + "</tr>");
                var editVal = $(".edit-object-Table");
                editVal.unbind("click").bind("click", function (e) {
                    var contentIdParent = $(e.target).parent().parent().attr("id");
                    if ($("#temp" + contentIdParent).length === 1) {
                        $("#temp" + contentIdParent).remove();
                    } else {
                        var countRowTable = self.tableMain.find("thead tr td");
                        try {
                            var nombU = $(e.target).parent().parent().find("td")[1].textContent;
                            var edadU = $(e.target).parent().parent().find("td")[2].textContent;
                        } catch (e) {
                            var nombU = $(e.target).parent().parent().parent().parent().find("td")[1].textContent;
                            var edadU = $(e.target).parent().parent().parent().parent().find("td")[2].textContent;
                        }
                        var data = {
                            usuario: nombU,
                            edad: edadU
                        }

                        $("#" + contentIdParent).after("<tr id='temp" + contentIdParent + "' class='temp'><td></td><td colspan='" + countRowTable.length + "' style='border: 1px solid rgba(192, 192, 192, 0.43);'><div class='hijoEdit'>" + tempEditUsuario(data) + "</div></td></tr>");
                    }
                });


                var editVal = $(".delete-object-Table");
                editVal.unbind("click").bind("click", function (e) {
                    var contentIdParent = $(e.target).parent().parent().attr("id");
                    if (confirm("¿Deseas eliminar este elemento " + contentIdParent + " ?")) {
                        alert("se borrara cuando se cree la funcion XD");
                    } else {
                        alert("Para que presionar si no vas a borrar!!");
                    }
                });

            }
        } else {
            $(".object-Table tbody").html("<tr class='tempLoagind'><td  colspan='4' >El usuario no se encontro en la BD!!</td></tr>");
        }
    }
    self._filter = function (value) {
        var rasengan = this;
        self.inputfilter.removeClass("txtSearchOff");
        self.inputfilter.addClass("txtSearchOn");
        self.inputfilter.unbind("keyup").bind("keyup", function (e) {
            var jsonNew = [];
            var fieldSearch = $(e.target).val();
            var js = JSON.parse(value);

            $.each(js, function (i, v) {
                var arreglo1 = [];
                arreglo1.push(v.usuario.toLowerCase());
                if (fieldSearch !== "") {
                    if (arreglo1.containsSubString(fieldSearch) !== -1) {
                        jsonNew.push(v);
                    }
                } else {
                    jsonNew = js;
                }
            });
            rasengan._setData(jsonNew);
        });
    };
};

var tempEditUsuario = function (data) {
    var html = "Editar usuario: " + data.usuario + "</div><div style='margin-bottom: 10px;'>Nombre del cliente: <input type='text' class='nombreU' value='"+data.usuario+"'  /></div><div style='margin-bottom: 10px;'>Edad del cliente: <input type='text' id='edadU' value=" + data.edad + " /></div><div><input type='button' value='Guardar' /><input type='button' value='Cancelar' /></div>"; 
    return html;
};