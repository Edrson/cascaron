import { Request, Response } from "express";
import { connect } from "../../intrastructure/driving/database";
import { IClientes } from "../../domain/models/cliente/cliente";

export async function getClient(
  req: Request,
  res: Response
): Promise<Response | void> {
  const conn = await connect();
  const clientes = await conn.query("SELECT * FROM Clientes");

  res.json({
    valid: true,
    Clientes: clientes[0],
  });
}

export async function postClient(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newclient: IClientes = req.body;
  console.log("interface", newclient);
  const conn = await connect();
  await conn.query("INSERT INTO Clientes set ?", [newclient]);
  return res.json({
    message: "Estoy activo :V",
  });
}
