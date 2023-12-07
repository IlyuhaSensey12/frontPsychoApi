import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export default function Blog() {
    const [blogPosts] = useState([
        {
            id: 1,
            title: 'Осознанность (Mindfulness)',
            content: 'Осознанность — это психологическая практика, позволяющая быть в настоящем моменте, осознавать свои мысли, эмоции и физические ощущения. Она помогает уменьшить стресс, повысить концентрацию и улучшить общее психологическое благополучие.',
        },
        {
            id: 2,
            title: 'Стресс и его влияние на здоровье',
            content: 'Стресс может оказывать негативное влияние на физическое и психическое здоровье. Постоянные стрессовые ситуации могут вызвать утомление, беспокойство, а также ухудшить работоспособность и иммунную систему организма.',
        },
        {
            id: 3,
            title: 'Депрессия: симптомы и помощь',
            content: 'Депрессия — это серьезное психическое состояние, характеризующееся чувством печали, потери интереса к жизни и энергии. Важно обратиться за помощью к специалисту и не оставаться в одиночестве с этим состоянием.',
        },
    ]);

    return (
        <div className='d-flex justify-content-center align-items-start mt-5'>
            <div className="container">
                <h1 className="text-center mb-4">Блог</h1>
                {blogPosts.map((post) => (
                    <div key={post.id} className="mb-4" style={{
                        color: 'white',
                        padding: '10px',
                        backgroundColor: 'cadetblue',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                    }}>
                        <h2 className="mb-2">{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
