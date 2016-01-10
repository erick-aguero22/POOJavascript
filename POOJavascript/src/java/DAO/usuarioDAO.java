package DAO;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import Entities.usuario;
import java.util.ArrayList;
import conexion.conexion;

public class usuarioDAO {

    private Connection cn;
    private Statement stm;
    private ResultSet rs;
    private ArrayList<usuario> list;

    public ArrayList<usuario> listarUsuario() throws SQLException {
        list = new ArrayList();
        try {
            cn = conexion.getConnection();
            stm = cn.createStatement();
            String query = "select * from cliente";
            rs = stm.executeQuery(query);
            while (rs.next()) {
                usuario u = new usuario();
                u.setID(rs.getInt("id_cliente"));
                u.setNombre(rs.getString("nombre_cliente"));
                u.setApellido(rs.getString("apellido_cliente"));
                u.setEdad(rs.getInt("edad_cliente"));
                list.add(u);
            }
            stm.close();
            cn.close();
        } catch (Exception e) {
            stm.close();
            cn.close();
            System.out.println(e.getMessage());
        }finally{
            return list;
        }
    }
}
