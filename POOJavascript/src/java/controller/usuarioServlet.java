package controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import Entities.usuario;
import DAO.usuarioDAO;

public class usuarioServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet usuarioServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet usuarioServlet at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String json = "[";
        try {
            usuarioDAO obj = new usuarioDAO();
            ArrayList<usuario> lista = obj.listarUsuario();
            for (usuario cliente : lista) {
                json += "{\"id\":\"" + cliente.getID() + "\",\"usuario\":\"" + cliente.getNombre() + " " + cliente.getApellido() + "\",\"edad\":\"" + cliente.getEdad() + "\"},";
            }
            json = json.substring(0, json.length() - 1);
            json += "]";
        } catch (Exception e) {
            json = e.getMessage();
        }
        out.write(json);
        out.flush();
        out.close();
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
