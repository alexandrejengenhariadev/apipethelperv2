import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'




export default class UsuariosController {
   public async store({request, response}: HttpContextContract){


        const body = request.body()
        const usuario = await Usuario.create(body)
       response.status(201)
       return{
           message: 'Usuário cadastrado com sucesso!',
           data: usuario,
       }
    }
    public async index() {
        const usuarios = await Usuario.all()
        return{
            data: usuarios,
        }
    }
    public async show({params}:HttpContextContract){
        const usuarios = await Usuario.findOrFail(params.id)
        return{
            data: usuarios,
        }

    }
    public async destroy({params}:HttpContextContract){
        const usuario = await Usuario.findOrFail(params.id)
        await usuario.delete()
        return{
            message: "Usuario excluído com sucesso!",
            data: usuario,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const usuario = await Usuario.findOrFail(params.id)
        usuario.nome  = body.nome
        usuario.login = body.login
        usuario.senha = body.senha
     
    await usuario.save()

    return{
        message: "Usuário atualizado com sucesso!",
        data: usuario,
    }
}

}
 