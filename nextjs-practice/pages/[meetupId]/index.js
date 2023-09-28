import { MongoClient } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return <MeetupDetail image="" title="" address="" description="" />;
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://elvira-0:elvira-0@cluster0.2m74irc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://elvira-0:elvira-0@cluster0.2m74irc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });

  client.close();

  return {
    props: {
      meetupData: {
        id:selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image:selectedMeetup.image,
        description:selectedMeetup.description
      },
    },
  };
};

export default MeetupDetails;
