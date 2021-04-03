import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const SubscriptionForm = ({ tags }) => {

  const [status, setStatus] = useState(null);

  const YOUR_FORM_ID = '2165724';
  const YOUR_SUBFORM_ID = '8997';
  
  const SUB_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

  const data = useStaticQuery(graphql`
    query {
      allTag {
        nodes {
          name
          id
        }
      }
    }
  `);

  const allTags = data.allTag.nodes;
  const tagMap = allTags.reduce((result, tag) => {
    result[tag.name] = tag.id;
    return result;
  }, {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch(
        FORM_URL,
        {
          method: 'post',
          body: data,
          headers: {
            accept: 'application/json',
          },
        }
      );

      const json = await response.json();

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
      setStatus('ERROR');
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <div class="post-subscribe">
      <h3>Software & Infrastructure, Business, Society. Life Itself. Let's Talk!</h3>
      <span class="post-subscribe-cta">
        Do you miss staying up late talking about really interesting ideas? I do! That's why I send out articles - to start conversations with interesting people like you 😉. You can always unsubscribe.
      </span>
      <form action={SUB_FORM_URL} method="post" onSubmit={handleSubmit}> 
        <input
          type="text"
          aria-label="First Name"
          name="fields[first_name]"
          placeholder="First Name"
          required
        />
        <input
          type="email"
          aria-label="Email Address"
          name="email_address"
          placeholder="Email Address"
          required
        />

        {tags.map((tagName) => (
          <input
            key={tagMap[tagName]}
            id={`tag-${YOUR_SUBFORM_ID}-${tagMap[tagName]}`}
            type="checkbox"
            style={{ display: 'none' }}
            checked
            name="tags[]"
            value={tagMap[tagName]}
          />

        ))}

        <button type="submit">Subscribe</button>
  
        {status === 'SUCCESS' && <p>Please go confirm your subscription!</p>}
        {status === 'ERROR' && <p>Oops, try again.</p>}
  
      </form>
    </div>
  );
};

export default SubscriptionForm