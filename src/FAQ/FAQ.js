import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function FAQ() {
    const [faqItems, setFaqItems] = useState([
        {
            id: 1,
            question: 'Как начать пользоваться приложением?',
            answer: 'Для начала пользования зарегистрируйтесь на сайте и войдите в свой аккаунт.',
            isOpen: false,
        },
        {
            id: 2,
            question: 'Как связаться с поддержкой?',
            answer: 'Вы можете связаться с нашей службой поддержки по телефону или по электронной почте.',
            isOpen: false,
        },
    ]);

    const toggleAccordion = (index) => {
        const updatedItems = faqItems.map((item, i) => {
            if (i === index) {
                return { ...item, isOpen: !item.isOpen };
            }
            return { ...item, isOpen: false };
        });
        setFaqItems(updatedItems);
    };

    return (
        <div className='d-flex justify-content-center align-items-start mt-5'>
            <div className="container">
                <h1 className="text-center mb-4">FAQ</h1>
                <p className="mb-4"style={{
                    color: 'white',
                    padding: '10px',
                    backgroundColor: 'cadetblue',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }}>Цель этого приложения - помочь людям в подборе специалистов.</p>
                <div className="container" style={{
                    color: 'white',
                    padding: '10px',
                    backgroundColor: 'cadetblue',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }}>Добро пожаловать на наш сайт, посвященный помощи в подборе лучших специалистов психологии! Мы стремимся облегчить ваш выбор, соединяя вас с опытными практикующими психологами. Наша цель - создать удобное и доверительное пространство, где вы сможете найти и выбрать именно того специалиста, который подходит именно вам. Доверьте свое благополучие опытным и заботливым рукам профессионалов. Начните свой путь к эмоциональному здоровью и гармонии с нами!</div>
                <div className="accordion" id="faqAccordion">
                    {faqItems.map((faqItem, index) => (
                        <div key={faqItem.id} className="accordion-item">
                            <h2 className="accordion-header" id={`heading${faqItem.id}`}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${faqItem.id}`}
                                    aria-expanded={faqItem.isOpen ? 'true' : 'false'}
                                    aria-controls={`collapse${faqItem.id}`}
                                    onClick={() => toggleAccordion(index)}
                                    style={{
                    color: 'white',
                    padding: '10px',
                    backgroundColor: 'cadetblue',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }}>
                                    {faqItem.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${faqItem.id}`}
                                className={`accordion-collapse collapse ${faqItem.isOpen ? 'show' : ''}`}
                                aria-labelledby={`heading${faqItem.id}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">{faqItem.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
