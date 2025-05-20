import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InitialCheck() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    physicalSafety: null,
    housing: null,
    food: null,
    crisis: null
  });

  const questions = [
    {
      id: 'physicalSafety',
      question: 'Do you feel physically safe in your daily environment (home, neighborhood, work)?',
      description: 'Consider your immediate physical security and well-being.'
    },
    {
      id: 'housing',
      question: 'Do you have stable housing?',
      description: 'This includes having a reliable place to stay, whether your own or with others.'
    },
    {
      id: 'food',
      question: 'Do you have reliable access to sufficient food?',
      description: 'Consider if you can consistently meet your basic nutritional needs.'
    },
    {
      id: 'crisis',
      question: 'Are you currently free from any acute crisis?',
      description: 'This includes serious health issues, severe mental health challenges, major addictions, recent devastating loss, or extreme legal/financial emergencies.'
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const allQuestionsAnswered = Object.values(answers).every(answer => answer !== null);
  const hasStability = Object.values(answers).every(answer => answer === true);

  const handleContinue = () => {
    if (hasStability) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Essential Stability Check</h1>
        <p className="text-gray-600 mb-8">
          Before we begin your journey, let's ensure you have the fundamental stability needed to make meaningful progress.
          Please answer these questions honestly - this is a private assessment for your benefit.
        </p>

        <div className="space-y-6">
          {questions.map(({ id, question, description }) => (
            <div key={id} className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">{question}</h2>
              <p className="text-gray-600 mb-4 text-sm">{description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleAnswer(id, true)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    answers[id] === true
                      ? 'bg-green-100 text-green-800 border-2 border-green-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer(id, false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    answers[id] === false
                      ? 'bg-red-100 text-red-800 border-2 border-red-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>

        {allQuestionsAnswered && (
          <div className="mt-8 border-t border-gray-200 pt-6">
            {hasStability ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                <p className="text-green-800">
                  You appear to have the essential stability needed to begin your journey.
                  You can proceed to start working on your personal growth and transformation.
                </p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                <p className="text-yellow-800">
                  It seems you might be facing some fundamental challenges right now.
                  We strongly recommend focusing on stabilizing these essential areas first:
                </p>
                <ul className="mt-2 ml-4 list-disc text-yellow-800">
                  {!answers.physicalSafety && (
                    <li>Consider reaching out to local safety resources or authorities for support</li>
                  )}
                  {!answers.housing && (
                    <li>Look into housing assistance programs or temporary shelter options</li>
                  )}
                  {!answers.food && (
                    <li>Investigate food banks, assistance programs, or community resources</li>
                  )}
                  {!answers.crisis && (
                    <li>Seek professional help or counseling for your immediate situation</li>
                  )}
                </ul>
              </div>
            )}

            <div className="flex justify-end">
              {hasStability ? (
                <button
                  onClick={handleContinue}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Begin Journey
                </button>
              ) : (
                <a
                  href="https://www.211.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Find Help Resources
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InitialCheck;