export default function ConversationList({ conversations }) {
 return (
  <div>
   <h3>Conversations</h3>
   {conversations.map((c) => (
    <div key={c.id}>
     <p>{c.body_text}</p>
     <hr />
    </div>
   ))}
  </div>
 );
}
