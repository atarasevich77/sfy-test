import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Paper from "@material-ui/core/Paper";

const DEFAULT_AVATAR_URL = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

export function renderDetails(row) {
    return (
        <Grid container style={{
            margin: "10px",
        }}>
            <Grid item md={12}
            >
                <Grid item md={12} container>
                    <Grid md={2}>
                        <Avatar
                            alt={row.committer.name}
                            src={row.committer.avatar_url ? row.committer.avatar_url : DEFAULT_AVATAR_URL}
                            style={{
                                width: '150px',
                                height: '150px',
                                marginLeft: '25px',
                            }}
                        />
                    </Grid>
                    <Grid item md={9}>
                        <Grid container>
                            <Grid item md={12}>
                                <Typography align={"left"}>
                                    <b>Id:</b> {row.committer.id}
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography align={"left"}>
                                    <b>Name:</b> {row.committer.name}
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography align={"left"}>
                                    <b>Repos URL: </b>
                                    <a
                                        color="secondary"
                                        target="_blank" href={row.committer.repos_url}>
                                        {row.committer.repos_url}
                                    </a>
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography align={"left"}>
                                    <b>Organizations URL: </b>
                                    <a
                                        color="secondary"
                                        target="_blank" href={row.committer.organizations_url}>
                                        {row.committer.organizations_url}
                                    </a>
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Paper style={{
                        padding: '10px',
                        marginRight: '20px',
                    }}>
                        <Typography>
                            <b>Message:</b> {row.commit.message}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>


        </Grid>
    )
}