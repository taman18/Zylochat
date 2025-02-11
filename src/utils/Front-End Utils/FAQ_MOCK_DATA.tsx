import { v4 as uuidv4 } from "uuid";
type popularQuestions={
    id:string,
    heading:string,
    description:string,
  }
  export const POPULAR_QUESTIONS : popularQuestions[]= [
    {
      id: uuidv4(),
      heading: "What if I run out of credits? Can I get more?",
      description:
        "Yes, you can either invest on a bigger plan (best value) or top up your credits directly in the app when you run out.",
    },
    {
      id: uuidv4(),
      heading: "Do we offer free trials?",
      description:
        "We don't offer free trials because it costs us money for every video generated but compared to paying freelancers thousands or spending countless hours doing it yourself, this is by far the best and most economical way to generate tons of amazing videos fast.",
    },
    {
      id: uuidv4(),
      heading: "Is AI generated content good for SEO? Is it plagiarism free?",
      description:
        "It absolutely is. We use a combination of AI and human curation to ensure that the content we generate is not only unique, but also high quality. We also have a plagiarism checker built in to ensure that the content we generate is not plagiarized.",
    },
    {
      id: uuidv4(),
      heading: "Do you offer support?",
      description:"You can reach us at support@vid.ai for anything. We mostly respond in under 12 hours on weekdays. We do prioritize paying customers and have live chat support for them.",
    },
    {
      id:uuidv4(),
      heading:"Are my payments secure?",
      description:"All of our payments are processed through Stripe, which is one of the most secure payment processors out there. We do not even store any of your payment information."
    },
    {
      id:uuidv4(),
      heading:"Is there a long-term contract or cancellation fee?",
      description:"No, our service is contract-free, and you can cancel anytime without any fees. But there is a 3-month lock-in period when you subscribe to our services."
    },
    {
      id:uuidv4(),
      heading:"Can I get a refund?",
      description:"Your satisfaction is our top priority! If it has not been more than 30 days since your payment, we're happy to refund for any unused credits—no questions asked for the credits you haven't used. Just send us an email at support@vid.ai, and we'll take care of the rest."
    }
  ];