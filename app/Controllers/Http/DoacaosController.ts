import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Doacao from 'App/Models/Doacao'

export default class DoacaosController {
    public async store({request, response}: HttpContextContract){


        const body = request.body()
        const doacao = await Doacao.create(body)
       response.status(201)
       return{
           message: 'Doacao cadastrada com sucesso!',
           data: doacao,
       }
    }
    public async index() {
        const doacaos = await Doacao.all()
        return{
            data: doacaos,
        }
    }
    public async show({params}:HttpContextContract){
        const doacaos = await Doacao.findOrFail(params.id)
        return{
            data: doacaos,
        }

    }
    public async destroy({params}:HttpContextContract){
        const doacao = await Doacao.findOrFail(params.id)
        await doacao.delete()
        return{
            message: "Doacao baixada com sucesso!",
            data: doacao,
        }

    }
 
    
}
