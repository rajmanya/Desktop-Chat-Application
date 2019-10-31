var admin = require("firebase-admin");

//configuration to connect to database
module.exports = {
    registerApplication: function() {
        return admin.initializeApp({
            credential: admin.credential.cert({
                projectId: 'zapdos-c4df5',
                clientEmail: 'firebase-adminsdk-z23l0@zapdos-c4df5.iam.gserviceaccount.com',
                privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJyb+ALGRPXolR\ndjRq3Y/SSXkSRAVl3EJ7K8fDbR5HELRxdx4lkn9XyXjn/gPhgkU6TSFGU0+K+fYd\nk3ttrqpeVMvnMzP1SkJJUBfUzbtH02wsqDDxIO8CC4rhMZW+W/ba38NzdCAUt1mS\n4NPXzB3VLECKVXco44/BFhhtxThtpY0BPzF1kfeds9ad/sHfWtJ7LKSEj+ESIMht\nCvFQbwBdCi7mnDl7khKaYSFMbEKS8Z0/grkBFHfnLE8pxmqX0JoWxbju57KT/5Wc\njq42FaIXM8WLoOSxldx4qm/WSFv7JfpWJEnHWiADzsRt9H/0dsGjiJNwEsyMvgvB\nbDoEspf7AgMBAAECggEAMbyN8C3V/aJhzfJtpF+awSz9U38TNbwGkWBxyNS0F7Hr\neIOncaeKaP1UM+XIr9eutodN6g07iq6EzRNF/AcO/2L7gVbFvBaUi9Mp7wpePmSO\nSSZjGD8rlyDkfjpAU8jtd/9KlXvG8sNmRXL7dQt8f0zsdSK5kxxlcSzRH5qPrmAK\nxtRuB1hep2bt7g+4q/pX0j5uGM5l2UfSJ+nsnUNRffSLsFJh2ktzeAYDE5BrcUJw\n/s0cIeJe0cEPYRKhTxX9SoWIO0b32m5SN1YiCRU2lRlPeTQ6HyA8PGaMd5y3kqDP\npmEOWfZ88xYADb1ELC+Fi3n2WblWpwRaFFFTlVcp8QKBgQC+K3OnIaT3W/eQbBeJ\nOHYyz6w09n0A+2PeCUT5pv8IU3CjcdlIRsPcZucYC+RH+GOL4BLOYehxrvmpaCWb\nWvrWqSdIeVxAGwOw4LN5RMHYvCD86j4eOtrk7eh+STFTTfzuKIUKNv1nUSPIw7OG\nVM/b3wdkD6i/hst8UR6at4Sc6wKBgQC5fFCaiRk77eUDhJ8anVOfXbEpWP0ZyDAZ\n0Wv7A7eGDRhAsmUVw9SlzzW39xXZcGwpQ5/pKTIFy898+VI4I7AbEP/Jhypa1B8E\nxlPoBrPbxUm9e+tiCpj4+XK50CCi0ftfSSDSsuwsQq0dB9y24dsoX89eApQcM7ea\nfFO0fmHtMQKBgQC3EblqYVcf0WcHnychMDuJOqa67bb05Q0EyMOf2gWVjE3Y6laT\n35vZZy581aXTKukZ1IIGL/bGyf0J+nqJjhH/6CMq/7mw9NCezBG6YliCPsk68H0Q\nOPRUgjrYp7lWSrN8yYEZjkpv1YqvUMZYQPlA3vmMeA6pIiht6uGda6G8NQKBgEGi\nIYttM8am+UBzbzEltm9P4d51pKm40nxwRDtAJ3KBs7FA7s/yyY4acjG0dsDILR20\n1iLU9uRiJ/ta5aMDzc7mBvyynWQiZw9zdkFGDeKYPu2Tqci5Y0PGULg7UzEKCF7B\nK6Iiubs3pLX/EDSOWtRAgsoLM4l/K1q4342gotohAoGAMvdK1mLUb+TrdQPuGw90\nVa/xIUHgHAv9iu6KVKqmuYcQEC/7NVUyzrq5JOYncL1QSN3L1g6Yk01cMlvYprqN\n5gyIcm3vk8bbO35V1oiGzM/VlHxmblrcGQvdDVe5+m3UP4ueLJ9RHUJAY/ted959\n9JM4J6aZY9CbXdJc+XMNdpQ=\n-----END PRIVATE KEY-----\n",
              }),
            databaseURL: "https://zapdos-c4df5.firebaseio.com"
        });
    }
}