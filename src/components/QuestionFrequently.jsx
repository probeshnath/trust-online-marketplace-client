import React from 'react'

const QuestionFrequently = () => {
    return (
        <div className='bg-green-100 py-10'>
            <div className='max-w-7xl px-3 md:w-1/2 flex flex-col gap-4 mx-auto'>
                <h2 className='text-4xl pt-4 pb-4 text-center text-orange-600 font-bold'>Freequently Answer and Questions</h2>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3"  />
                    <div className="collapse-title text-xl font-medium">
                    what is web Development? 
                    </div>
                    <div className="collapse-content">
                        <p>Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.</p>
                        <p>Web development is also known as website development, while the professionals that maintain a website are called web developers or (more commonly) web devs.Web development is the coding or programming that enables website functionality, per the owner's requirements. It mainly deals with the non-design aspect of building websites, which includes coding and writing markup.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                   What is Graphics Design?
                    </div>
                    <div className="collapse-content">
                        <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                       What is Digital Marketing?
                    </div>
                    <div className="collapse-content">
                        <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                       Which one is Best in 2023?
                    </div>
                    <div className="collapse-content">
                        <p>The choice between web development, digital marketing, and graphic design depends on your interests, skills, and career goals. Each field has its own unique characteristics and opportunities, and what's "best" for you depends on your individual preferences and strengths. Here's a brief overview of each field:</p>
                        <p>Ultimately, the "best" choice depends on your interests and aptitude. You may even find that there is overlap between these fields; for example, web developers often need design skills, and digital marketers often work with web developers to optimize websites for marketing purposes. Consider your strengths, passions, and career goals when making your decision. It's also worth noting that you can always combine these skills or transition between fields as your career evolves.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionFrequently