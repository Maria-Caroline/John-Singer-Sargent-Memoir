'use client'
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import quizBanner from '../../../../public/quizBanner.png'
import quizmenu from '../../../../public/quizMenu.png'
// Importe suas imagens de resultado aqui
import excellentImage from '../../../../public/quizWin.png'
import goodImage from '../../../../public/quizFail.png'
import okayImage from '../../../../public/quizFail.png'
import tryAgainImage from '../../../../public/quizFail.png'

const QuizPage: React.FC = () => {
    const t = useTranslations('Quiz');

    // Estados do quiz
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    // Função para download do certificado
    const downloadCertificate = () => {
        // Substitua 'certificado.png' pelo caminho da sua imagem
        const certificateUrl = '/certificate.png'; // Coloque a imagem na pasta public

        const link = document.createElement('a');
        link.href = certificateUrl;
        link.download = 'certificado-quiz-sargent.png'; // Nome do arquivo baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Função para iniciar o quiz
    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer('');
        setShowResult(false);
        setQuizCompleted(false);
        setUserAnswers([]);
    };

    // Função para selecionar resposta
    const handleAnswerSelect = (optionLabel) => {
        setSelectedAnswer(optionLabel);
    };

    // Função para obter as perguntas das traduções
    const getQuestions = () => {
        return [
            {
                id: 1,
                question: t('question1'),
                options: [
                    { text: t('question1OptionA'), isCorrect: t('question1CorrectA') === 'true' },
                    { text: t('question1OptionB'), isCorrect: t('question1CorrectB') === 'true' },
                    { text: t('question1OptionC'), isCorrect: t('question1CorrectC') === 'true' },
                    { text: t('question1OptionD'), isCorrect: t('question1CorrectD') === 'true' }
                ]
            },
            {
                id: 2,
                question: t('question2'),
                options: [
                    { text: t('question2OptionA'), isCorrect: t('question2CorrectA') === 'true' },
                    { text: t('question2OptionB'), isCorrect: t('question2CorrectB') === 'true' },
                    { text: t('question2OptionC'), isCorrect: t('question2CorrectC') === 'true' },
                    { text: t('question2OptionD'), isCorrect: t('question2CorrectD') === 'true' }
                ]
            },
            {
                id: 3,
                question: t('question3'),
                options: [
                    { text: t('question3OptionA'), isCorrect: t('question3CorrectA') === 'true' },
                    { text: t('question3OptionB'), isCorrect: t('question3CorrectB') === 'true' },
                    { text: t('question3OptionC'), isCorrect: t('question3CorrectC') === 'true' },
                    { text: t('question3OptionD'), isCorrect: t('question3CorrectD') === 'true' }
                ]
            },
            {
                id: 4,
                question: t('question4'),
                options: [
                    { text: t('question4OptionA'), isCorrect: t('question4CorrectA') === 'true' },
                    { text: t('question4OptionB'), isCorrect: t('question4CorrectB') === 'true' },
                    { text: t('question4OptionC'), isCorrect: t('question4CorrectC') === 'true' },
                    { text: t('question4OptionD'), isCorrect: t('question4CorrectD') === 'true' }
                ]
            },
            {
                id: 5,
                question: t('question5'),
                options: [
                    { text: t('question5OptionA'), isCorrect: t('question5CorrectA') === 'true' },
                    { text: t('question5OptionB'), isCorrect: t('question5CorrectB') === 'true' },
                    { text: t('question5OptionC'), isCorrect: t('question5CorrectC') === 'true' },
                    { text: t('question5OptionD'), isCorrect: t('question5CorrectD') === 'true' }
                ]
            },
            {
                id: 6,
                question: t('question6'),
                options: [
                    { text: t('question6OptionA'), isCorrect: t('question6CorrectA') === 'true' },
                    { text: t('question6OptionB'), isCorrect: t('question6CorrectB') === 'true' },
                    { text: t('question6OptionC'), isCorrect: t('question6CorrectC') === 'true' },
                    { text: t('question6OptionD'), isCorrect: t('question6CorrectD') === 'true' }
                ]
            },
            {
                id: 7,
                question: t('question7'),
                options: [
                    { text: t('question7OptionA'), isCorrect: t('question7CorrectA') === 'true' },
                    { text: t('question7OptionB'), isCorrect: t('question7CorrectB') === 'true' },
                    { text: t('question7OptionC'), isCorrect: t('question7CorrectC') === 'true' },
                    { text: t('question7OptionD'), isCorrect: t('question7CorrectD') === 'true' }
                ]
            },
            {
                id: 8,
                question: t('question8'),
                options: [
                    { text: t('question8OptionA'), isCorrect: t('question8CorrectA') === 'true' },
                    { text: t('question8OptionB'), isCorrect: t('question8CorrectB') === 'true' },
                    { text: t('question8OptionC'), isCorrect: t('question8CorrectC') === 'true' },
                    { text: t('question8OptionD'), isCorrect: t('question8CorrectD') === 'true' }
                ]
            },
            {
                id: 9,
                question: t('question9'),
                options: [
                    { text: t('question9OptionA'), isCorrect: t('question9CorrectA') === 'true' },
                    { text: t('question9OptionB'), isCorrect: t('question9CorrectB') === 'true' },
                    { text: t('question9OptionC'), isCorrect: t('question9CorrectC') === 'true' },
                    { text: t('question9OptionD'), isCorrect: t('question9CorrectD') === 'true' }
                ]
            },
            {
                id: 10,
                question: t('question10'),
                options: [
                    { text: t('question10OptionA'), isCorrect: t('question10CorrectA') === 'true' },
                    { text: t('question10OptionB'), isCorrect: t('question10CorrectB') === 'true' },
                    { text: t('question10OptionC'), isCorrect: t('question10CorrectC') === 'true' },
                    { text: t('question10OptionD'), isCorrect: t('question10CorrectD') === 'true' }
                ]
            }
        ];
    };

    // Função para confirmar resposta e ir para próxima pergunta
    const handleNextQuestion = () => {
        const questions = getQuestions();
        const currentQ = questions[currentQuestion];
        const selectedOption = currentQ.options[parseInt(selectedAnswer)];

        // Salvar resposta do usuário
        const newAnswer = {
            questionId: currentQ.id,
            selectedOption: selectedAnswer,
            isCorrect: selectedOption?.isCorrect || false
        };

        const updatedAnswers = [...userAnswers, newAnswer];
        setUserAnswers(updatedAnswers);

        // Calcular pontuação (cada resposta correta vale 200 pontos)
        if (selectedOption?.isCorrect) {
            setScore(score + 250);
        }

        // Verificar se é a última pergunta
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
        } else {
            // Quiz completo
            setQuizCompleted(true);
        }
    };

    // Função para reiniciar o quiz
    const restartQuiz = () => {
        setQuizStarted(false);
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer('');
        setShowResult(false);
        setQuizCompleted(false);
        setUserAnswers([]);
    };

    const renderQuizIntro = () => (
        <div className='m-9 bg-white shadow-lg rounded-2xl p-15 w-2xl h-[35rem]'>
            <Image src={quizmenu} alt="Banner" width={60} className="mx-auto" />
            <h1 className='m-2 text-2xl text-brown font-semibold font-[Montserrat] text-center'>
                {t('titleCard')}
            </h1>
            <p className='text-brown m-4 font-semibold text-xl text-center'> {t('subtitle')}</p>
            <p className=' text-brown m-4 text-xl text-justify'> {t('descriptionCardOne')}</p>
            <p className='m-4 text-brown text-xl text-justify'> {t('descriptionCardTwo')}</p>
            <button
                onClick={startQuiz}
                className='cursor-pointer shadow-lg text-white text-2xl rounded-2xl font-semibold bg-lightbrown w-full h-[5rem] hover:bg-brown'
            >
                <h1> {t('start')}</h1>
            </button>
            <p className=' text-brown m-4 text-md text-center'> {t('note')}</p>
        </div>
    );

    // Renderizar pergunta atual
    const renderQuestion = () => {
        const questions = getQuestions();
        const currentQ = questions[currentQuestion];

        return (
            <div className='m-9 bg-white shadow-lg rounded-2xl p-15 w-2xl h-[35rem]'>
                {/* Pergunta */}
                <h1 className='text-xl font-semibold text-gray-900 text-center mb-8 leading-relaxed'>
                    {currentQ.question}
                </h1>

                {/* Opções */}
                <div className='space-y-3 mb-8'>
                    {currentQ.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index.toString())}
                            className={`w-full text-xl p-4 text-left rounded-2xl transition-all duration-200 flex items-center space-x-4 ${selectedAnswer === index.toString()
                                ? 'bg-lightsephia shadow-md'
                                : 'border-transparent hover:bg-gray-100 hover:shadow-sm'
                                }`}
                        >
                            <div className={`w-6 h-6 text-xl rounded-full flex items-center justify-center text-sm font-medium ${selectedAnswer === index.toString()
                                ? 'bg-brown'
                                : 'bg-sephia'
                                }`}>
                            </div>
                            <span className='text-gray-800 font-medium'>{option.text}</span>
                        </button>
                    ))}
                </div>

                {/* Botão Continue */}
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === ''}
                    className={`w-full h-14 rounded-2xl font-semibold text-lg transition-all duration-200 ${selectedAnswer !== ''
                        ? 'bg-lightbrown hover:bg-brown text-white cursor-pointer shadow-lg hover:shadow-xl'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                >
                    <h1> {t('continue')}</h1>
                </button>

                {/* Nota sobre certificado */}
              <p className=' text-brown m-4 text-md text-center'> {t('note')}</p>
            </div>
        );
    };

    // useEffect para download automático do certificado
    React.useEffect(() => {
        if (quizCompleted && score >= 2000) {
            // Pequeno delay para dar tempo da tela carregar
            const timer = setTimeout(() => {
                downloadCertificate();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [quizCompleted, score]);

    // Função para obter imagem baseada na pontuação
    const getResultImage = (correctAnswers) => {
        if (correctAnswers >= 8) {
            return excellentImage;
        } else if (correctAnswers >= 6) {
            return goodImage;
        } else if (correctAnswers >= 4) {
            return okayImage;
        } else {
            return tryAgainImage;
        }
    };

    // Renderizar resultado final
    const renderResult = () => {
        const questions = getQuestions();
        const finalScore = score;
        const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;

        let resultMessage = '';
        let titleMessage = '';
        let certificateEarned = finalScore >= 2000;

        if (correctAnswers >= 8) {
            titleMessage = t('quizWin')
            resultMessage = t('quizWinDescripiton');
        } else if (correctAnswers >= 6) {
            titleMessage = t('quizFail')
            resultMessage = t('quizFailDescripiton');
        } else if (correctAnswers >= 4) {
            titleMessage = t('quizFail')
            resultMessage = t('quizFailDescripiton');
        } else {
            titleMessage = t('quizFail');
            resultMessage = t('quizFailDescripiton');
        }

        return (
            <div className='m-9 bg-white shadow-lg rounded-2xl p-15 w-2xl h-[35rem]'>
                <div className='text-center'>
                    {/* Imagem baseada na performance */}
                    <div className='mb-6'>
                        <Image
                            src={getResultImage(correctAnswers)}
                            alt="Resultado do Quiz"
                            width={65}
                            className="mx-auto mb-4 rounded-full "
                        />
                    </div>

                    <h1 className='text-brown text-2xl font-semibold font-[Montserrat] mb-4'>
                        {titleMessage}
                    </h1>

                    <div className='mb-6'>
                        <div className='text-3xl font-bold text-lightbrown mb-2'>
                            {finalScore} points
                        </div>
                        <div className='text-lg text-gray-600'>
                            {correctAnswers}  {t('of')} {questions.length}
                        </div>
                    </div>

                    <div className='text-brown mb-3 p-4 rounded-lg'>
                        <p className='text-lg text-center'>{resultMessage}</p>
                    </div>

                    {certificateEarned && (


                        <button
                            onClick={downloadCertificate}
                            className='cursor-pointer m-3 px-4 py-2 hover:text-sephia text-lightbrown rounded-lg font-semibold text-sm underline'
                        >
                            {t('download')}
                        </button>

                    )}

                    <div className='space-y-3'>
                        <button
                            onClick={restartQuiz}
                            className='cursor-pointer shadow-lg text-white text-2xl rounded-2xl font-semibold bg-lightbrown w-full h-[5rem] hover:bg-brown'
                        >
                            <h1> {t('tryAgain')} </h1>
                        </button>

                    </div>
                   <p className=' text-brown m-4 text-md text-center'> {t('note')}</p>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div>
                <div className="w-full">
                    <section className="relative w-full">
                        <Image src={quizBanner} alt="Banner" layout="responsive" width={16} height={9} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                            <h1 className="text-center text-3xl font-[Montserrat]">
                                {t('title')}
                            </h1>
                        </div>
                    </section>
                </div>
                <div className=' m-9 flex justify-center'>
                    <div className='m-9 flex justify-center max-w-5xl flex-col'>
                        <p className='text-xl text-justify'>
                            {t('description')}
                        </p>
                        {!quizStarted && !quizCompleted && renderQuizIntro()}
                        {quizStarted && !quizCompleted && renderQuestion()}
                        {quizCompleted && renderResult()}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default QuizPage;