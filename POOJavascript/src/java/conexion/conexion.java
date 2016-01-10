package conexion;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;


public class conexion {
    
    private static Connection cn = null;
    
    public static Connection getConnection(){
        try{
            String Driver= "com.mysql.jdbc.Driver";
            String url = "jdbc:mysql://localhost:3306/prueba";
            String usuario = "root";
            String password = "root";
            
            Class.forName(Driver);
            cn = DriverManager.getConnection(url,usuario, password);
        }catch(ClassNotFoundException e){
            System.out.println("clas "+e.getMessage());
        }catch(SQLException e){
            System.out.println("SQL "+e.getMessage());
        }catch(Exception e){
            System.out.println("excepcion "+e.getMessage());
        }finally{
            return cn;
        }
    }
    
}
