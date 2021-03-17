import { Request, Response } from 'express';
import { getRepository, Like, getMongoRepository } from 'typeorm';
import fs from 'fs';

import ClientesInadimplentesEntity from '../typeorm/entities/ClientesInadimplentes';

function diacriticSensitiveRegex(string = '') {
    return string.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/a/g, '[a,á,à,ä,ã]')
        .replace(/e/g, '[e,é,ë,è]')
        .replace(/i/g, '[i,í,ï,ì]')
        .replace(/o/g, '[o,ó,ö,ò]')
        .replace(/u/g, '[u,ü,ú,ù]')
        .replace(/c/g, '[c,ç]');
}

export default {
    async get(request: Request, response: Response) {

        const ClientesInadimplenteRepository = getRepository(ClientesInadimplentesEntity);
        const ClientesInadimplentes = await ClientesInadimplenteRepository.find()

        return response.status(200).json({ ClientesInadimplentes });
    },
    async add(request: Request, response: Response) {

        const { nome, desde, valor } = request.body;

        if (!nome || !desde || !valor) {
            return response.status(401).json({ message: 'Não autorizado' });
        }

        const ClientesInadimplenteRepository = getRepository(ClientesInadimplentesEntity);
        const ClientesInadimplente = ClientesInadimplenteRepository.create({
            nome, desde, valor
        });

        await ClientesInadimplenteRepository.save(ClientesInadimplente);

        return response.status(201).json(ClientesInadimplente);
    },

    async total(request: Request, response: Response) {
        const ClientesInadimplenteRepository = getRepository(ClientesInadimplentesEntity);
        const CountClientesInadimplentes = await ClientesInadimplenteRepository.count();
        return response.status(200).json(CountClientesInadimplentes);
    },

    async addManyUsers(request: Request, response: Response) {

        const ClientesInadimplenteRepository = getRepository(ClientesInadimplentesEntity);
        const CountClientesInadimplentes = await ClientesInadimplenteRepository.count();
        if (CountClientesInadimplentes > 0) {
            return response.status(200).json({ message: 2 });
        }

        var obj = JSON.parse(fs.readFileSync(__dirname + "/pack.json", 'utf8'));

        const ClientesInadimplente = ClientesInadimplenteRepository.create(obj);
        await ClientesInadimplenteRepository.save(ClientesInadimplente);

        return response.status(201).json({ message: 1 });
    },

    async search(request: Request, response: Response) {
        const { term } = request.params;

        const userRepository = getMongoRepository(ClientesInadimplentesEntity);
        const ClientesInadimplentes = await userRepository.find({
            where: {
                nome: { $regex: diacriticSensitiveRegex(term), $options: 'i' }
            }
        });

        return response.status(200).json({ ClientesInadimplentes });
    }
}