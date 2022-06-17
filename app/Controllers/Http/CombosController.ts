import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Combo from 'App/Models/Combo'

export default class CombosController {
    public async store({request, response}: HttpContextContract){


        const body = request.body()
        const combo = await Combo.create(body)
       response.status(201)
       return{
           message: 'Combo cadastrado com sucesso!',
           data: combo,
       }
    }
    public async index() {
        const combos = await Combo.all()
        return{
            data: combos,
        }
    }
    public async show({params}:HttpContextContract){
        const combos = await Combo.findOrFail(params.id)
        return{
            data: combos,
        }

    }
    public async destroy({params}:HttpContextContract){
        const combo = await Combo.findOrFail(params.id)
        await combo.delete()
        return{
            message: "combo excluído com sucesso!",
            data: combo,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const combo = await Combo.findOrFail(params.id)
        combo.produto1  = body.produto1
        combo.produto2  = body.produto2
        combo.produto3  = body.produto3
        combo.produto4  = body.produto4
        combo.valor     = body.valor
      
     
    await combo.save()

    return{
        message: "Combo atualizado com sucesso!",
        data: combo,
    }
}

}
