import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Card, Checkbox } from 'flowbite-react'
import Header from './components/layout/Header'

import headerData from './data/head.json'

function App() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="max-w-2xl mx-auto mt-8">
                    <Accordion>
                        <AccordionPanel>
                            <AccordionTitle>Header</AccordionTitle>
                            <AccordionContent>
                                <div className="space-y-4">
                                    {headerData.map((item) => (
                                        <Card key={item.name} className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={item.name} />
                                                <label htmlFor={item.name} className="font-semibold">
                                                    {item.name}
                                                </label>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                        </Card>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default App
