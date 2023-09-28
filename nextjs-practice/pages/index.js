import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "a first meetup",
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80",
      address: "some address 5, 1234, some city",
      description: "this is a first meetup!",
    },
    {
      id: "m2",
      title: "a second meetup",
      image:
        "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      address: "some address 2, 1dfff234, some city",
      description: "this is a second meetup!",
    },
  ];
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
