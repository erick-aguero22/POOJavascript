
package conexion;

import java.sql.Connection;

public class test {
    public static void main (String [] args){
        Connection cn = conexion.getConnection();
        if (cn !=null){
            System.out.println("Conexion exitosa");
        }else{
            System.out.println("Error ");
        }
    }
}
