import EventBlock from '@/components/EventBlock'
export default function EventGrid({events}:{events: Array<any>}) {
    return (
        <>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3" >
            {
                events.map(event =>(
                    <div key={event._id}>
                        <EventBlock {...event}/>
                    </div>
                ))
            }
        </div>   
        </>
    )
  }