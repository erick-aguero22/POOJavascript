package Entities;

public class usuario {

    private int id_cliente;
    private String nombre_cliente;
    private String apellido_cliente;
    private int edad_cliente;

    public usuario() {
    }

    public usuario(int id_cliente, String nombre_cliente, String apellido_cliente, int edad_cliente) {
        this.id_cliente = id_cliente;
        this.nombre_cliente = nombre_cliente;
        this.apellido_cliente = apellido_cliente;
        this.edad_cliente = edad_cliente;
    }

    public void setID(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public int getID() {
        return this.id_cliente;
    }

    public void setNombre(String nombre_cliente) {
        this.nombre_cliente = nombre_cliente;
    }

    public String getNombre() {
        return this.nombre_cliente;
    }

    public void setApellido(String apellido_cliente) {
        this.apellido_cliente = apellido_cliente;
    }

    public String getApellido() {
        return this.apellido_cliente;
    }

    public void setEdad(int edad_cliente) {
        this.edad_cliente = edad_cliente;
    }

    public int getEdad() {
        return this.edad_cliente;
    }

}
