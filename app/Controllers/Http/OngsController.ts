import  Application  from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ong from 'App/Models/Ong'
import {v4 as uuidv4} from 'uuid'

export default class OngsController {

    private validationOptions = {
        types: ["image"],
        size: "2mb",
    }
    public async store({request, response}: HttpContextContract){


        const body = request.body()

        const imagem = request.file('imagem',this.validationOptions)
        if (imagem){
            const imageName = `${uuidv4()}.${imagem.extname}`

            await imagem.move(Application.tmpPath('uploads'),{
                name: imageName

            })
            body.imagem = imageName
        }

        const ong = await Ong.create(body)
       response.status(201)
       return{
           message: 'Ong cadastrada com sucesso!',
           data: ong,
       }
    }
    public async index() {
        const ongs = await Ong.all()
        return{
            data: ongs,
        }
    }
    public async show({params}:HttpContextContract){
        const ongs = await Ong.findOrFail(params.id)
        return{
            data: ongs,
        }

    }
    public async destroy({params}:HttpContextContract){
        const ong = await Ong.findOrFail(params.id)
        await ong.delete()
        return{
            message: "Ong excluida com sucesso!",
            data: ong,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const ong = await Ong.findOrFail(params.id)
        ong.nome  = body.nome
        ong.cep = body.cep
        ong.endereco = body.endereco
        ong.telefone = body.telefone
        ong.responsavel = body.responsavel
        ong.email = body.email
       
        
        if (ong.imagem != body.imagem || !ong.imagem){
            
            const imagem = request.file('imagem',this.validationOptions)
            
            if(imagem){
                const imageName = `${uuidv4()}.${imagem.extname}`
                await imagem.move(Application.tmpPath('uploads'), {
                name: imageName,})
            ong.imagem = imageName
         }
    }
    await ong.save()

    return{
        message: "Ong atualizada com sucesso!",
        data: ong,
    }
}
}