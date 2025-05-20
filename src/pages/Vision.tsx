import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Vision() {
  const [vivardentVision, setVivardentVision] = useState({
    faire: '',
    etre: '',
    avoir: '',
    ressentir: ''
  });

  const [antiVision, setAntiVision] = useState('');
  const [moiPrime, setMoiPrime] = useState({
    qualities: '',
    beliefs: '',
    behaviors: ''
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Vision & Identity</h1>

      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-100 p-1 mb-8">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-indigo-700 shadow'
                  : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-800'
              )
            }
          >
            Vivardent Vision
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-indigo-700 shadow'
                  : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-800'
              )
            }
          >
            Anti-Vision
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-indigo-700 shadow'
                  : 'text-indigo-600 hover:bg-white/[0.12] hover:text-indigo-800'
              )
            }
          >
            Moi Prime
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Faire</h3>
                <p className="text-sm text-gray-600 mb-2">What activities dominate your ideal daily life? What is your mission?</p>
                <textarea
                  value={vivardentVision.faire}
                  onChange={(e) => setVivardentVision(prev => ({ ...prev, faire: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe your ideal activities and mission..."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Être</h3>
                <p className="text-sm text-gray-600 mb-2">What qualities of character do you embody? Who have you become?</p>
                <textarea
                  value={vivardentVision.etre}
                  onChange={(e) => setVivardentVision(prev => ({ ...prev, etre: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe your ideal character and being..."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Avoir</h3>
                <p className="text-sm text-gray-600 mb-2">What relationships do you maintain? What is your lifestyle?</p>
                <textarea
                  value={vivardentVision.avoir}
                  onChange={(e) => setVivardentVision(prev => ({ ...prev, avoir: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe your ideal relationships and possessions..."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ressentir</h3>
                <p className="text-sm text-gray-600 mb-2">What dominant emotions do you experience daily?</p>
                <textarea
                  value={vivardentVision.ressentir}
                  onChange={(e) => setVivardentVision(prev => ({ ...prev, ressentir: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe your ideal emotional state..."
                />
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Anti-Vision</h3>
              <p className="text-sm text-gray-600 mb-4">
                Describe vividly and in detail what your life would become if you don't act, if you continue on your current negative trajectory. 
                This creates a powerful contrast to motivate action.
              </p>
              <textarea
                value={antiVision}
                onChange={(e) => setAntiVision(e.target.value)}
                className="w-full h-64 p-2 border rounded-md"
                placeholder="Describe your anti-vision..."
              />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Qualities & Attitudes</h3>
                <p className="text-sm text-gray-600 mb-2">What are the main qualities of your ideal self? How do they face challenges?</p>
                <textarea
                  value={moiPrime.qualities}
                  onChange={(e) => setMoiPrime(prev => ({ ...prev, qualities: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe the qualities and attitudes..."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Fundamental Beliefs</h3>
                <p className="text-sm text-gray-600 mb-2">What beliefs guide your ideal self about their capabilities, the world, and others?</p>
                <textarea
                  value={moiPrime.beliefs}
                  onChange={(e) => setMoiPrime(prev => ({ ...prev, beliefs: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe the fundamental beliefs..."
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Habitual Behaviors</h3>
                <p className="text-sm text-gray-600 mb-2">How does your ideal self act daily? How do they manage their time, energy, and relationships?</p>
                <textarea
                  value={moiPrime.behaviors}
                  onChange={(e) => setMoiPrime(prev => ({ ...prev, behaviors: e.target.value }))}
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Describe the habitual behaviors..."
                />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}