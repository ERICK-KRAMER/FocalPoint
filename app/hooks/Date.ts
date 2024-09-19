import { useState, useEffect } from 'react';

function useFormattedDate() {
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
        function formatarDataAtual() {
            const hoje = new Date();

            const diasDaSemana = [
                'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
            ];

            const meses = [
                'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
            ];

            const diaSemana = diasDaSemana[hoje.getDay()];
            const dia = hoje.getDate().toString().padStart(2, '0');
            const mes = meses[hoje.getMonth()];
            const ano = hoje.getFullYear();

            return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
        }

        setFormattedDate(formatarDataAtual());
    }, []);

    return formattedDate;
}

export { useFormattedDate };
